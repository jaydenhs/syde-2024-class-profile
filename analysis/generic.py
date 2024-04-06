import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots


def pie_plot(df: pd.DataFrame, section: str, key: str, parse_multi_answer=True, normalize=True, show=True):
    data = df[section, key].dropna()
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


def multi_pie(df: pd.DataFrame, key: str, values: list, show=True):
    fig = make_subplots(rows=1, cols=len(values), subplot_titles=values, specs=[[{"type": "pie"}] * len(values)])
    for i, value in enumerate(values, 1):
        portion = df[df[key] == value].value_counts(normalize=True).reset_index()
        portion.columns = [key, 'value', 'proportion']
        fig.add_trace(go.Pie(labels=portion['value'], values=portion['proportion']), row=1, col=i)
    fig.update_traces(textinfo='percent+label')
    if show:
        fig.show()
    return fig
