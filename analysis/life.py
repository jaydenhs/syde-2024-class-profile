import pandas as pd

from source import load_data
from generic import pie_plot


def political_leaning(df: pd.DataFrame, show=True):
    return pie_plot(df, 'life', 'politics', show=show)


if __name__ == "__main__":
    df = load_data()
    political_leaning(df)