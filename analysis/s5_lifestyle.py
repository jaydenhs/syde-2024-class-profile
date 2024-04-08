import pandas as pd

from source import load_data, load_edgy_data
from generic import pie_plot

def political_leaning(df: pd.DataFrame, show=True):
    return pie_plot(df['life', 'politics'], show=show)

def myers_briggs(df: pd.DataFrame, show=True):
    return pie_plot(df['fun', 'myers-briggs'], show=show)

def relation_status(df: pd.DataFrame, **kwargs):
    return pie_plot(df['relation-status'], **kwargs)

def relation_forever(df: pd.DataFrame, **kwargs):
    return pie_plot(df['relation-forever'], **kwargs)

def lost_virginity(df: pd.DataFrame, **kwargs):
    return pie_plot(df['lost-virginity'], **kwargs)

def sex_partners(df: pd.DataFrame, **kwargs):
    return pie_plot(df['sex-partners'], **kwargs)

def num_relations(df: pd.DataFrame, **kwargs):
    return pie_plot(df['num-relations'], **kwargs)

if __name__ == "__main__":
    # df = load_data()
    # myers_briggs(df)

    df_edgy = load_edgy_data()
