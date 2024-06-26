import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots


def pie_plot(series: pd.Series, show=True, colors=None, is_portion=False, **kwargs):
    data = get_portions(series, **kwargs) if not is_portion else series
    fig = px.pie(names=data.index, values=data.values, hole=0.5, color=data.index, color_discrete_map=colors)
    fig.update_layout(showlegend=False)
    fig.update_traces(textinfo='percent+label')
    if show:
        fig.show()
    return fig



def get_portions(series: pd.Series, parse_multi_answer=True, normalize=True, use_og_count=True, replace=None):
    data = series.dropna().copy()
    count = len(data)
    if parse_multi_answer:
        data = data.str.split(',').explode()
        data = data.str.strip()
    if not use_og_count:
        count = len(data)
    if replace:
        data.replace(replace, inplace=True)
    data = data.value_counts()
    if normalize:
        data /= count
        data *= 100
    return data


def stack_bar_plot(df: pd.DataFrame, xlabel='Term', split_x_on='-', normalize=True, show=True):
    data = df.melt(var_name=xlabel, value_name='var')
    if split_x_on:
        data[xlabel] = data[xlabel].str.split(split_x_on).str[-1]
    data = data.groupby(xlabel)['var'].value_counts(normalize=normalize).reset_index(name='count')
    fig = px.bar(data, x=xlabel, y='count', color='var', barmode='stack')
    fig.update_layout(xaxis_title=xlabel, yaxis_title='%')
    if show:
        fig.show()
    return fig


def coerce_numeric(df: pd.DataFrame, errors='coerce') -> pd.DataFrame:
    """Coerce all columns in the DataFrame to numeric. If a value cannot be coerced, it will be replaced with NaN by default."""
    data = df.copy()
    for column in data.columns:
        data[column] = pd.to_numeric(data[column], errors=errors)
    return data


def get_colour_map(*series: pd.Series, theme=px.colors.qualitative.Plotly):
    union = pd.concat(series).index.unique()
    return dict(zip(union, theme[:len(union)]))
