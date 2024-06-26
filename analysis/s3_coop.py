import pandas as pd
import plotly.express as px

from source import load_data, search_headers
from generic import coerce_numeric, stack_bar_plot

pay_term_mapping = {
    'pay-1a': '1A',
    'pay-1b': '1B',
    'pay-2a': '2A',
    'pay-2b': '2B',
    'pay-3a': '3A',
    'pay-3b': '3B',
}

def salary(df: pd.DataFrame, show=True):
    data = coerce_numeric(df[search_headers('pay', 'coop')]['coop'])
    data.columns = data.columns.str.replace('pay-', '').str.upper()

    fig = px.box(data)
    fig.update_layout(title='Salary Distribution', xaxis=dict(title='Term'), yaxis=dict(title='Salary (CAD)'))
    fig.update_layout(showlegend=False)
    if show:
        fig.show()
    return fig


def braindrain(df: pd.DataFrame, show=True):
    data = df[search_headers('loc', 'coop')]['coop']
    locs = data.melt(var_name='term', value_name='location')['location']
    fig = px.histogram(locs, title='Location of Full-Time Work', labels={'coop-loc-ft': 'Location'})
    fig.update_layout(showlegend=False)
    if show:
        fig.show()
    return fig


def grades_vs_salary(df: pd.DataFrame, show=True):
    grades = coerce_numeric(df[search_headers('avg', 'academics')]['academics']).mean(axis=1)
    salary = coerce_numeric(df[search_headers('pay', 'coop')]['coop']).mean(axis=1)
    fig = px.scatter(x=grades, y=salary, trendline='ols')
    fig.update_layout(title=f'Average Grades vs. Coop Salary', xaxis=dict(title='Average Grade'), yaxis=dict(title='Salary (CAD)'))
    if show:
        fig.show()
    return fig

def work_model(df: pd.DataFrame, show=True):
    data = df[search_headers('model', 'coop')]['coop']
    return stack_bar_plot(data, show=show)


def title(df: pd.DataFrame, show=True):
    data = df[search_headers('title', 'coop')]['coop']
    return stack_bar_plot(data, show=show)


if __name__ == "__main__":
    df = load_data()
    work_model(df)
