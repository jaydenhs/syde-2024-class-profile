import pandas as pd
import plotly.express as px
import plotly.figure_factory as ff

from source import load_data
from generic import multi_pie, pie_plot


def kids_by_gender(df: pd.DataFrame, show=True):
    gender = df['background']['gender']
    kids = df['future']['kids']
    data = pd.concat([gender, kids], axis=1)
    return multi_pie(data, 'gender', ['Male', 'Female'], show=show)


def marriage_by_gender(df: pd.DataFrame, show=True):
    gender = df['background']['gender']
    marriage = df['future']['marrying']
    data = pd.concat([gender, marriage], axis=1)
    return multi_pie(data, 'gender', ['Male', 'Female'], show=show)
    

def next_year_plans(df: pd.DataFrame, show=True):
    return pie_plot(df, 'future', 'post-grad-plan', show=show)


def full_time_locations(df: pd.DataFrame, show=True):
    return pie_plot(df, 'job', 'loc-ft', show=show)


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
    if show:
        fig.show()
    return fig



if __name__ == "__main__":
    df = load_data()
    salary_vs_location(df)
