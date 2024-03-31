import pandas as pd
import plotly.express as px

from source import load_data


def pie_plot(df: pd.DataFrame, key: str, parse_multi_answer=True, normalize=True, show=True):
    data = df['background', key].dropna()
    if parse_multi_answer:
        data = data.str.split(',').explode()
        data = data.str.strip()
    data = data.value_counts(normalize=normalize)
    if normalize:
        data *= 100
    fig = px.pie(names=data.index, values=data.values, color_discrete_sequence=px.colors.qualitative.Set1)
    fig.update_layout(title=f'{key.capitalize()} Distribution', showlegend=False)
    fig.update_traces(textinfo='percent+label')
    if show:
        fig.show()
    return fig


def ethnicity(df: pd.DataFrame, **kwargs):
    return pie_plot(df, 'ethnicity', **kwargs)

def gender(df: pd.DataFrame, **kwargs):
    return pie_plot(df, 'gender', **kwargs)

def sexual_orientation(df: pd.DataFrame, **kwargs):
    return pie_plot(df, 'sexual-orientation', **kwargs)

def parent_education(df: pd.DataFrame, **kwargs):
    return pie_plot(df, 'parent-degree', **kwargs)

def parent_income(df: pd.DataFrame, show=True):
    data = df['background', 'parent-income'].dropna().value_counts(normalize=True) * 100
    data.drop("Don't know", inplace=True)
    fig = px.bar(x=data.index, y=data.values)
    # TODO: Not sorted properly
    fig.update_layout(title='Parental Income ', xaxis_title='Income Range', yaxis_title='% of Students')
    if show:
        fig.show()
    return fig


def international(df: pd.DataFrame, **kwargs):
    return pie_plot(df, 'is-international', **kwargs)


if __name__ == "__main__":
    df = load_data()
    parent_education(df)
