import pandas as pd
import plotly.express as px

from source import load_data
from generic import pie_plot

def restart_program(df: pd.DataFrame, **kwargs):
    return pie_plot(df['syde', 'restart-program'], **kwargs)

def close_friends(df: pd.DataFrame, **kwargs):
    return pie_plot(df['syde', 'close-friends'], **kwargs)

def transfer_well_integrated(df: pd.DataFrame, **kwargs):
    return pie_plot(df['syde', 'transfers-well-integrated'], **kwargs)

def restart_program_historical(df: pd.DataFrame, show=True):
    cohorts = [2017, 2018, 2019, 2021, 2023, 2024]
    percentages = [60, 78, 86, 87, 67, 67]

    data = pd.DataFrame({'Cohort': cohorts, 'Percentage': percentages})
    fig = px.line(data, x='Cohort', y='Percentage', title='SYDE Preference Over Years', markers=True)
    fig.update_xaxes(title_text='Cohort')
    fig.update_yaxes(title_text='% of Class Choosing SYDE Again')
    if show:
        fig.show()
    
    return fig

if __name__ == "__main__":
    df = load_data()
    restart_program_historical(df)
