import pandas as pd
import plotly.express as px
import plotly.figure_factory as ff

from source import load_data
from generic import pie_plot, get_colour_map


def _future_gender_plot(df: pd.DataFrame, key, gender: str, show=True):
    gender_s = df['background']['gender']
    kids = df['future'][key]
    data = pd.concat([gender_s, kids], axis=1)
    colors = get_colour_map(kids.value_counts())
    data = data[data['gender'] == gender]
    return pie_plot(data[key], colors=colors, parse_multi_answer=False, show=show)

def kids_male(df: pd.DataFrame, show=True):
    return _future_gender_plot(df, 'kids', 'Male', show=show)

def kids_female(df: pd.DataFrame, show=True):
    return _future_gender_plot(df, 'kids','Female', show=show)


def marriage_male(df: pd.DataFrame, show=True):
    return _future_gender_plot(df, 'marrying', 'Male', show=show)

def marriage_female(df: pd.DataFrame, show=True):
    return _future_gender_plot(df, 'marrying', 'Female', show=show)


def next_year_plans(df: pd.DataFrame, show=True):
    return pie_plot(df['future', 'post-grad-plan'], show=show)


def full_time_locations(df: pd.DataFrame, show=True):
    return pie_plot(df['job', 'loc-ft'], show=show)


def full_time_salary(df: pd.DataFrame, show=True):
    data = pd.to_numeric(df['job']['pay-ft'], errors='coerce').dropna()
    bad_salaries = data[data < 200e3].tolist()
    good_salaries = data[data >= 200e3].tolist()
    fig = ff.create_distplot(
        [bad_salaries, good_salaries],
        ['Full-time Pay', 'Full-time Pay'],
        histnorm='probability',
        curve_type='normal',
        bin_size=20000,
        show_rug=False,
    )
    fig.update_layout(title='Full-Time Salary Distribution', xaxis_title='Salary', yaxis_title='Density', showlegend=False)
    # fig = px.histogram(data, title='Full-Time Salary Distribution', marginal="box")
    # fig.update_layout(xaxis_title='Salary', yaxis_title='Count')
    if show:
        fig.show()
    return fig


def salary_vs_location(df: pd.DataFrame, show=True):
    salaries = pd.to_numeric(df['job']['pay-ft'], errors='coerce')
    locations = df['job']['loc-ft']
    data = pd.concat([salaries, locations], axis=1)
    data.dropna(inplace=True)
    data = data[data['loc-ft'] != 'Undetermined']
    fig = px.box(data, x='loc-ft', y='pay-ft')
    fig.update_layout(xaxis_title='Full-time Job Location', yaxis_title='Salary ($CAD)')
    if show:
        fig.show()
    return fig



if __name__ == "__main__":
    df = load_data()
    kids_male(df)
    kids_female(df)
