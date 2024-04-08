import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots


def pie_plot(series: pd.Series, show=True, parse_multi_answer=True, **kwargs):
    data = get_portions(series, parse_multi_answer, **kwargs)
    fig = px.pie(names=data.index, values=data.values, hole=0.5) 
    fig.update_layout(showlegend=False)
    fig.update_traces(textinfo='percent+label')
    if show:
        fig.show()
    return fig



def get_portions(series: pd.Series, parse_multi_answer=True, normalize=True):
    data = series.dropna().copy()
    if parse_multi_answer:
        data = data.str.split(',').explode()
        data = data.str.strip()
    data = data.value_counts(normalize=normalize)
    if normalize:
        data *= 100
    return data


def multi_pie_plot(df: pd.DataFrame, key: str, values: list, show=True):
    fig = make_subplots(rows=1, cols=len(values), subplot_titles=values, specs=[[{"type": "pie"}] * len(values)])
    for i, value in enumerate(values, 1):
        portion = df[df[key] == value].value_counts(normalize=True).reset_index()
        portion.columns = [key, 'value', 'proportion']
        fig.add_trace(go.Pie(labels=portion['value'], values=portion['proportion'], hole=0.5), row=1, col=i)
    fig.update_layout(showlegend=False)
    fig.update_traces(textinfo='percent+label')
    if show:
        fig.show()
    return fig


def multi_pie_plot_raw(df: pd.DataFrame, labels=None, show=True):
    labels = labels or df.columns
    fig = make_subplots(rows=1, cols=len(df.columns), subplot_titles=labels, specs=[[{"type": "pie"}] * 2])
    for i, column in enumerate(df.columns, 1):
        fig.add_trace(go.Pie(labels=df.index, values=df[column], hole=0.5), row=1, col=i)
    fig.update_layout(showlegend=False)
    fig.update_traces(textinfo='percent+label')
    if show:
        fig.show()
    return fig


def coerce_numeric(df: pd.DataFrame, errors='coerce') -> pd.DataFrame:
    """Coerce all columns in the DataFrame to numeric. If a value cannot be coerced, it will be replaced with NaN by default."""
    data = df.copy()
    for column in data.columns:
        data[column] = pd.to_numeric(data[column], errors=errors)
    return data
