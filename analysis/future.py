import pandas as pd

from source import load_data
from generic import multi_pie


def kids_by_gender(df: pd.DataFrame, show=True):
    gender = df['background']['gender']
    kids = df['future']['kids']
    data = pd.concat([gender, kids], axis=1)
    return multi_pie(data, 'gender', ['Male', 'Female'], show=show)


def marriage_by_gender(df: pd.DataFrame, show=True):
    gender = df['background']['gender']
    marriage = df['future']['marrying']
    data = pd.concat([gender, marriage], axis=1)
    return multi_pie(data, 'gender', ['Male', 'Female'], show=show)
    


if __name__ == "__main__":
    df = load_data()
    marriage_by_gender(df)