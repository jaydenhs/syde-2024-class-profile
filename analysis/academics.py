import numpy as np
import pandas as pd
import plotly.express as px

from source import get_headers, load_data, coerce_numeric, search_headers


GRADE_COLUMNS = ['avg-1a', 'avg-1b', 'avg-2a', 'avg-2b', 'avg-3a', 'avg-3b', 'avg-4a']
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


def plot_grades(df: pd.DataFrame, box=True, show=True):
    data = coerce_numeric(df[GRADE_COLUMNS])
    fig = px.box(data) if box else px.line(data.mean(), error_y=data.sem(), markers=True)
    fig.update_layout(title='Average Grades by Term', yaxis=dict(title='Average Grade'), xaxis=dict(title='Term'))
    if show:
        fig.show()
    return fig


def plot_ease_vs_use(df: pd.DataFrame, show=True):
    ease = df[search_headers('ease-')]
    use = df[search_headers('use-')]
    ease = ease.replace(EASE_SCALE)
    use = use.replace(USEFULNESS_SCALE)
    # Average the ease and usefulness columns
    ease = ease.mean(skipna=True)
    use = use.mean(skipna=True)
    # Rename column from ease-syde101 to syde101
    ease = ease.rename(lambda x: x.split('-')[-1], axis=0)
    use = use.rename(lambda x: x.split('-')[-1], axis=0)
    # Combine the two series into a DataFrame
    data = pd.concat([ease, use], keys=['ease', 'use'], axis=1)
    fig = px.scatter(data, x='ease', y='use', text=data.index, size_max=60)
    fig.update_layout(title='Ease of Use vs. Usefulness', xaxis=dict(title='Ease of Use'), yaxis=dict(title='Usefulness'))
    if show:
        fig.show()
    return fig


def plot_attendance(df: pd.DataFrame, show=True):
    data = df[search_headers('attendance')]
    mapping = {
        '0 - 20%': 0.1,
        '20 - 40%': 0.3,
        '40 - 60%': 0.5,
        '60 - 80%': 0.7,
        '80 - 100%': 0.9,
    }
    data = data.applymap(lambda x: mapping.get(x, np.nan))
    fig = px.line(data.mean(), error_y=data.sem(), markers=True)
    fig.update_layout(
        title='Average Attendance by Term',
        xaxis=dict(title='Term'),
        yaxis=dict(title='Average Attendance', range=[0, 1]),
    )
    if show:
        fig.show()
    return fig



def plot_academics(df: pd.DataFrame, show=True):
    return {
        'ease_vs_use': plot_ease_vs_use(df, show=show),
        'attendance': plot_attendance(df, show=show),
        'grades': plot_grades(df, show=show),
    }


if __name__ == "__main__":
    df = load_data()['academics']
    plot_academics(df)
