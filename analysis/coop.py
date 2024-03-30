import numpy as np
import pandas as pd
import plotly.express as px

from source import get_headers, load_data, coerce_numeric, search_headers



def plot_salary(df: pd.DataFrame, show=True):
    data = coerce_numeric(df[search_headers('pay', section='coop')])
    fig = px.box(data)
    fig.update_layout(title='Salary Distribution', xaxis=dict(title='Term'), yaxis=dict(title='Salary (CAD)'))
    fig.update_layout(showlegend=False)
    if show:
        fig.show()
    return fig


def plot_coop(df: pd.DataFrame, show=True):
    return {
        'salary': plot_salary(df, show=show),
    }


if __name__ == "__main__":
    df = load_data()['coop']
    plot_coop(df)
