import pandas as pd
import plotly.express as px

from source import load_data
from generic import pie_plot

def restart_program(df: pd.DataFrame, **kwargs):
    return pie_plot(df, 'syde', 'restart-program', **kwargs)

def close_friends(df: pd.DataFrame, **kwargs):
    return pie_plot(df, 'syde', 'close-friends', **kwargs)

if __name__ == "__main__":
    df = load_data()
    close_friends(df)
    