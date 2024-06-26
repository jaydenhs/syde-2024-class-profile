import pandas as pd
import plotly.express as px

from source import load_data
from generic import pie_plot, get_portions, get_colour_map


uni_ethnicity = pd.Series({
    'White': 0.38,
    'East Asian': 0.29,
    'South Asian': 0.19,
    # 'Middle Eastern': 0.07,
    'Black': 0.05,
    'Indigenous': 0.01,
    # 'Other': 0.01,
})

uni_gender = pd.Series({
    'Male': 0.45,
    'Female': 0.52,
    'Non-binary': 0.02,
    'Other': 0.039,
    'Prefer not to say': 0.01,
})

uni_sexuality = pd.Series({
    'Straight/heterosexual': 0.73,
    'Bisexual': 0.11,
    'Asexual': 0.06,
    'Queer': 0.04,
    'Questioning': 0.04,
    # 'Gay': 0.03,
    # 'Lesbian': 0.02,
    # 'Other': 0.06,
    'Prefer not to say': 0.05,
})

uni_religion = pd.Series({
    'No religious affiliation': 0.49,
    'Christianity': 0.24,
    'Islam': 0.09,
    'Hinduism': 0.08,
    'Other': 0.10,
})


def ethnicity(df: pd.DataFrame, show=True, **kwargs):
    data = df['background', 'ethnicity']
    data = get_portions(data, replace={'First Nations': 'Indigenous'}, **kwargs)
    data = pd.concat([data, uni_ethnicity * 100], axis=1)
    data.columns = ['SYDE 2024', 'UWaterloo']
    fig = px.bar(data, barmode='group')
    fig.update_layout(yaxis_title='% of Students', xaxis_title='Ethnicity')
    if show:
        fig.show()
    return fig

# UWaterloo gender pie plot wasn't insightful
def gender(df: pd.DataFrame, **kwargs):
    return pie_plot(df['background', 'gender'], **kwargs)

def sexual_orientation(df: pd.DataFrame, show=True, **kwargs):
    sexuality = get_portions(df['background', 'sexual-orientation'], **kwargs)
    data = pd.concat([sexuality, uni_sexuality * 100], axis=1)
    data.columns = ['SYDE 2024', 'UWaterloo']
    fig = px.bar(data, barmode='group')
    fig.update_layout(yaxis_title='% of Students', xaxis_title='Sexual Orientation')
    if show:
        fig.show()
    return fig


def parent_education(df: pd.DataFrame, **kwargs):
    return pie_plot(df['background', 'parent-degree'], **kwargs)

def parent_income(df: pd.DataFrame, show=True):
    data = df['background', 'parent-income'].dropna().value_counts(normalize=True) * 100
    data = data[['$50 - 100K', '$100 - 150K', '$150 - 200K', '$200 - 250K', '$250 - 300K', '$300K+']]
    fig = px.bar(x=data.index, y=data.values)
    fig.update_layout(title='Parental Income', xaxis_title='Income Range', yaxis_title='% of Students')
    if show:
        fig.show()
    return fig

def _get_religion_data(df: pd.DataFrame, **kwargs):
    replace = {'Agnostic': 'No religious affiliation', 'Athiesm': 'No religious affiliation'}
    return get_portions(df['life', 'religion'], replace=replace, **kwargs)

def religion(df: pd.DataFrame, show=True, **kwargs):
    data = _get_religion_data(df, **kwargs)
    colors = get_colour_map(data, uni_religion)
    return pie_plot(data, is_portion=True, colors=colors, show=show)

def uw_religion(df, show=True, **kwargs):
    class_data = _get_religion_data(df, **kwargs)
    colors = get_colour_map(class_data, uni_religion)
    return pie_plot(uni_religion, is_portion=True, colors=colors, show=show)

def international(df: pd.DataFrame, **kwargs):
    return pie_plot(df['background', 'is-international'], **kwargs)


if __name__ == "__main__":
    df = load_data()
    religion(df, show=True)
    uw_religion(df, show=True)
