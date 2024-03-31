import pandas as pd
import plotly.express as px

from source import load_data, coerce_numeric, search_headers



def salary(df: pd.DataFrame, show=True):
    data = coerce_numeric(df['coop'][search_headers('pay')])
    fig = px.box(data)
    fig.update_layout(title='Salary Distribution', xaxis=dict(title='Term'), yaxis=dict(title='Salary (CAD)'))
    fig.update_layout(showlegend=False)
    if show:
        fig.show()
    return fig


if __name__ == "__main__":
    df = load_data()
    salary(df)
