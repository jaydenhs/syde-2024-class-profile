import numpy as np
import pandas as pd
import plotly.express as px

from source import get_headers, load_data, coerce_numeric, search_headers


GRADE_COLUMNS = ['avg-1a', 'avg-1b', 'avg-2a', 'avg-2b', 'avg-3a', 'avg-3b', 'avg-4a']
EASE_SCALE = {
    'Very Difficult': 1,
    'Difficult': 2,
    'Normal Difficulty': 3,
    'Easy': 4,
    'Very Easy': 5
}
USEFULNESS_SCALE = {
    'Not Useful': 1,
    'Slightly Useful': 2,
    'Neutral': 3,
    'Useful': 4,
    'Very Useful': 5
}


def ease_columns():
    headers = get_headers('academics')
    return [header for header in headers if 'ease' in header]

def usefulness_columns():
    headers = get_headers('academics')
    return [header for header in headers if 'use' in header]


def plot_grades(df: pd.DataFrame, box=True, show=True):
    data = coerce_numeric(df[GRADE_COLUMNS])
    fig = px.box(data) if box else px.line(data.mean(), error_y=data.sem(), markers=True)
    fig.update_layout(title='Average Grades by Term', yaxis=dict(title='Average Grade'), xaxis=dict(title='Term'))
    if show:
        fig.show()
    return fig


def plot_ease_vs_use(df: pd.DataFrame, show=True):
    data = df[search_headers('ease') + search_headers('use')]
    # Average the ease and usefulness columns
    data = data.mean(skipna=True).reset_index()
    fig = px.scatter(data, x='ease', y='use', trendline='ols')
    fig.update_layout(title='Ease of Use vs. Usefulness', xaxis=dict(title='Ease of Use'), yaxis=dict(title='Usefulness'))
    if show:
        fig.show()
    return fig


def plot_attendance(df: pd.DataFrame, show=True):
    data = df[search_headers('attendance')]
    mapping = {
        '0 - 20%': 0,
        '20 - 40%': 0.3,
        '40 - 60%': 0.5,
        '60 - 80%': 0.7,
        '80 - 100%': 0.9,
    }
    data = data.applymap(lambda x: mapping.get(x, np.nan))
    fig = px.box(data)
    fig.update_layout(title='Average Attendance by Term', yaxis=dict(title='Average Attendance'), xaxis=dict(title='Term'))
    if show:
        fig.show()
    return fig
        


def plot_academics(df: pd.DataFrame, show=True):
    return [
        # plot_ease_vs_use(df, show=show),
        plot_attendance(df, show=show),
        # plot_grades(df, show=show),
    ]


if __name__ == "__main__":
    df = load_data()['academics']
    plot_academics(df)
