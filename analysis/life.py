import pandas as pd

from source import load_data
from generic import pie_plot, multi_pie_plot_raw, get_portions


uni_religion = pd.Series({
    'No religious affiliation': 0.49,
    'Christianity': 0.24,
    'Islam': 0.09,
    'Hinduism': 0.08,
    'Other': 0.10,
})


def political_leaning(df: pd.DataFrame, show=True):
    return pie_plot(df['life', 'politics'], show=show)

def myers_briggs(df: pd.DataFrame, show=True):
    return pie_plot(df['fun', 'myers-briggs'], show=show)

def religion(df: pd.DataFrame, show=True):
    data = df['life', 'religion'].str.split(',').explode().str.strip()
    data.replace('Agnostic', 'No religious affiliation', inplace=True)
    data.replace('Athiesm', 'No religious affiliation', inplace=True)
    data = data.value_counts(normalize=True) * 100
    data = pd.concat([data, uni_religion], axis=1)
    return multi_pie_plot_raw(data, ['SYDE 24', 'UW'], show=show)


if __name__ == "__main__":
    df = load_data()
    religion(df)