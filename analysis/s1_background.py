import pandas as pd
import plotly.express as px

from source import load_data
from generic import pie_plot, get_portions, multi_pie_plot_raw


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

uni_sexuality = pd.Series({
    'Straight/heterosexual': 0.73,
    'Bisexual': 0.11,
    'Asexual': 0.06,
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
    ethnicity = get_portions(df['background', 'ethnicity'], **kwargs)
    ethnicity.replace('First Nations', 'Indigenous', inplace=True)
    data = pd.concat([ethnicity, uni_ethnicity], axis=1)
    return multi_pie_plot_raw(data, ['SYDE 2024', 'UWaterloo'], show)

# UWaterloo gender pie plot wasn't insightful
def gender(df: pd.DataFrame, show=True, **kwargs):
    return pie_plot(df['background', 'gender'], show=show, **kwargs)

def sexual_orientation(df: pd.DataFrame, show=True, **kwargs):
    sexuality = get_portions(df['background', 'sexual-orientation'], **kwargs)
    data = pd.concat([sexuality, uni_sexuality], axis=1)
    return multi_pie_plot_raw(data, ['SYDE 2024', 'UWaterloo'], show)


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

def religion(df: pd.DataFrame, show=True):
    data = df['life', 'religion'].str.split(',').explode().str.strip()
    data.replace('Agnostic', 'No religious affiliation', inplace=True)
    data.replace('Athiesm', 'No religious affiliation', inplace=True)
    data = data.value_counts(normalize=True) * 100
    data = pd.concat([data, uni_religion], axis=1)
    return multi_pie_plot_raw(data, ['SYDE 2024', 'UWaterloo'], show=show)

def international(df: pd.DataFrame, **kwargs):
    return pie_plot(df['background', 'is-international'], **kwargs)


if __name__ == "__main__":
    df = load_data()
    sexual_orientation(df)
