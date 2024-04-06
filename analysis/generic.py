import pandas as pd
import plotly.express as px


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