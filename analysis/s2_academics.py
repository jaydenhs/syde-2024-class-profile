import numpy as np
import pandas as pd
import plotly.express as px

from source import load_data, search_headers
from generic import pie_plot, coerce_numeric

EASE_SCALE = {
    'Incredibly Difficult': 1,
    'Difficult': 2,
    'Normal Difficulty': 3,
    'Easy': 4,
    'Very Easy': 5,
    "Don't Remember": np.nan,
}
USEFULNESS_SCALE = {
    'Not Useful': 1,
    'Slightly Useful': 2,
    'Moderately Useful': 3,
    'Useful': 4,
    'Very Useful': 5,
    "Don't Remember": np.nan,
}
PERCENT_MAP = {
    '0 - 20%': 0.1,
    '20 - 40%': 0.3,
    '40 - 60%': 0.5,
    '60 - 80%': 0.7,
    '80 - 100%': 0.9,
}
EXCHANGE_SCHOOL_COUNTRY = {
    'Lund University': 'Sweden',
    'Singapore University of Technology and Design': 'Singapore',
    'Delft University of Technology': 'Netherlands',
    'National University of Singapore': 'Singapore',
    'Tampere University': 'Finland',
    'École Polytechnique Fédérale de Lausanne': 'France',
    'University College London': 'United Kingdom',
    'Charles III University of Madrid': 'Spain',
}


def grades(df: pd.DataFrame, box=True, show=True):
    # Customizing the term headers
    data = coerce_numeric(df['academics'][search_headers('avg')])
    data.columns = data.columns.str.replace('avg-', '').str.upper()
    fig = px.box(data) if box else px.line(data.mean(), error_y=data.sem(), markers=True)
    fig.update_layout(title='Average Grades by Term', yaxis=dict(title='Average Grade'), xaxis=dict(title='Term'))
    if show:
        fig.show()
    return fig


def ease_vs_use(df: pd.DataFrame, show=True):
    ease = df['academics'][search_headers('ease-')]
    use = df['academics'][search_headers('use-')]
    ease = ease.replace(EASE_SCALE)
    use = use.replace(USEFULNESS_SCALE)
    # Center individual answers
    ease = ease.subtract(ease.mean(axis=1), axis=0)
    use = use.subtract(use.mean(axis=1), axis=0)
    # Average the ease and usefulness columns
    ease = ease.mean(axis=0)
    use = use.mean(axis=0)
    # Rename column from ease-syde101 to syde101
    ease = ease.rename(lambda x: x.split('-')[-1], axis=0)
    use = use.rename(lambda x: x.split('-')[-1], axis=0)
    # Combine the two series into a DataFrame
    data = pd.concat([ease, use], keys=['ease', 'use'], axis=1)
    # Scale values to -1 to 1
    data /= data.abs().max()
    fig = px.scatter(data, x='ease', y='use', text=data.index, size_max=60)
    fig.update_layout(
        title='Easiness vs. Usefulness',
        yaxis=dict(title='Usefulness', range=[-1.1, 1]),
        xaxis=dict(title='Easiness', range=[-1.1, 1.1]),
    )
    if show:
        fig.show()
    return fig


def attendance(df: pd.DataFrame, show=True):
    data = df['academics'][search_headers('attendance')]
    data.columns = data.columns.str.replace('attendance-', '').str.upper()
    data = data.applymap(lambda x: PERCENT_MAP.get(x, np.nan))
    fig = px.line(data.mean(), error_y=data.sem(), markers=True)
    fig.update_layout(
        title='Average Attendance by Term',
        xaxis_title='Term',
        yaxis=dict(title='Average Attendance', range=[0, 1]),
        showlegend=False,
    )
    if show:
        fig.show()
    return fig


def friends_vs_grades(df: pd.DataFrame, show=True):
    grades = coerce_numeric(df['academics'][search_headers('avg')])
    grades = grades.mean(skipna=True, axis=1)
    friends = df['syde', 'close-friends']
    friends.replace({'5+': 5}, inplace=True)
    friends = pd.to_numeric(friends, errors='coerce')
    fig = px.scatter(x=friends, y=grades, size_max=60)
    fig.update_layout(title='Average Grades vs. Close Friends', xaxis_title='Close Friends', yaxis_title='Average Grade')
    if show:
        fig.show()
    return fig


def attendance_vs_grades(df: pd.DataFrame, box=True, show=True):
    attendance = df['academics'][search_headers('attendance')]
    attendance = attendance.rename(lambda x: x.split('-')[-1], axis=1)
    attendance = attendance.melt(var_name='term', value_name='attendance')
    grades = coerce_numeric(df['academics'][search_headers('avg')])
    grades = grades.rename(lambda x: x.split('-')[-1], axis=1)
    grades = grades.melt(var_name='term', value_name='grade')
    data = pd.merge(attendance, grades, on='term')
    data.drop('term', axis=1, inplace=True)
    if box:
        fig = px.box(data, x='attendance', y='grade')
    else:
        data = data.groupby('attendance')
        data = pd.concat([data.mean(), data.sem()], axis=1)
        data.columns = ['mean', 'std']
        fig = px.line(data, error_y='std', markers=True)
    fig.update_layout(
        title='Average Grades vs. Attendance',
        xaxis_title='Attendance',
        yaxis_title='Average Grade',
        xaxis_categoryorder='category ascending',
    )
    if show:
        fig.show()
    return fig


def challenging(df: pd.DataFrame, show=True):
    return pie_plot(df['academics', 'how-challenging'], normalize=False, show=show)


def imposter_syndrome(df: pd.DataFrame, show=True):
    data = df['academics'][search_headers('imposter')] # pd.DataFrame
    data = data.apply(lambda x: x.str.split(' ').str[0].apply(float))

    fig = px.box(data)
    fig.update_layout(
        title='Impostor Syndrome by Term',
        xaxis_title='Term',
        yaxis_title='Impostor Syndrome',
    )
    if show:
        fig.show()
    return fig


def exchange_locations(df: pd.DataFrame, show=True):
    data = df['exchange', 'school'].str.strip()
    data = data.replace(EXCHANGE_SCHOOL_COUNTRY)
    data = data.value_counts().reset_index()
    data.columns = ['locations', 'count']
    fig = px.scatter_geo(data,
        locationmode='country names',
        locations='locations',
        size='count',
        projection='natural earth',
        fitbounds='locations',
    )
    # Resolution needed to show Singapore
    fig.update_layout(title='Exchange Locations', geo_resolution=50)
    
    if show:
        fig.show()
    return fig
    # return pie_plot(data, normalize=False, show=show)


if __name__ == "__main__":
    df = load_data()
    ease_vs_use(df)
