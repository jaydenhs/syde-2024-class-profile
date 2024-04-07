import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots

from source import load_data
from generic import pie_plot, get_pie_data


uni_ethnicity = pd.Series({
    'White': 0.38,
    'East Asian': 0.29,
    'South Asian': 0.19,
    'Middle Eastern': 0.07,
    'Black': 0.05,
    'Indigenous': 0.01,
    'Other': 0.01,
})

uni_gender = pd.Series({
    'Male': 0.45,
    'Female': 0.52,
    'Non-binary': 0.02,
    'Other': 0.039,
    'Prefer not to say': 0.01,
})

uni_religion = pd.Series({
    'None': 0.49,
    'Christian': 0.24,
    'Muslim': 0.09,
    'Hindu': 0.08,
})

uni_sexuality = pd.Series({
    'Straight/heterosexual': 0.73,
    'Bisexual': 0.11,
    'Asexual': 0.06,
    'Prefer not to say': 0.05,
})

def comparison_pie_plot(data: pd.Series, uni_data: pd.Series, show=True):
    fig = make_subplots(rows=1, cols=2, subplot_titles=['SYDE 24', 'UW'], specs=[[{"type": "pie"}] * 2])
    fig.add_trace(go.Pie(labels=data.index, values=data.values), row=1, col=1)
    fig.add_trace(go.Pie(labels=uni_data.index, values=uni_data.values), row=1, col=2)
    fig.update_traces(textinfo='percent+label')
    if show:
        fig.show()
    return fig

def ethnicity(df: pd.DataFrame, show=True, **kwargs):
    ethnicity = get_pie_data(df['background', 'ethnicity'], **kwargs)
    ethnicity.replace('First Nations', 'Indigenous', inplace=True)
    return comparison_pie_plot(ethnicity, uni_ethnicity, show=show)

def gender(df: pd.DataFrame, show=True, **kwargs):
    gender = get_pie_data(df['background', 'gender'], **kwargs)
    return comparison_pie_plot(gender, uni_gender, show=show)

def sexual_orientation(df: pd.DataFrame, show=True, **kwargs):
    sexuality = get_pie_data(df['background', 'sexual-orientation'], **kwargs)
    return comparison_pie_plot(sexuality, uni_sexuality, show=show)


def parent_education(df: pd.DataFrame, **kwargs):
    return pie_plot(df['background', 'parent-degree'], **kwargs)

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
    return pie_plot(df['background', 'is-international'], **kwargs)


if __name__ == "__main__":
    df = load_data()
    sexual_orientation(df)
