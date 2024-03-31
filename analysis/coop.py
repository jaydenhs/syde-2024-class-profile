import pandas as pd
import plotly.express as px

from source import load_data, coerce_numeric, search_headers



def salary(df: pd.DataFrame, show=True):
    data = coerce_numeric(df[search_headers('pay', 'coop')]['coop'])
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


if __name__ == "__main__":
    df = load_data()
    grades_vs_salary(df)
