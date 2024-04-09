import numpy as np
import pandas as pd
import plotly.express as px

from generic import coerce_numeric


RESTAURANT_COORDINATES = {
    'gols': '43.472712530763566, -80.53627552100342',
    'lazeez': '43.472527332628964, -80.53882249001533',
    'the bingsu': '43.47274123559098, -80.5357892746715',
    # 'meetpoint': '43.43927434216514, -80.56410786118101', # At the boardwalk, far from campus
    'watami': '43.46570914756122, -80.52228371700001',
    'lancasters': np.nan,
    'yunshang': np.nan,
    'oka sushi': '43.47492039624738, -80.53138682278019',
    'sushi stars': np.nan,
    'lucero canteen': np.nan,
    'mels': np.nan,
    'myungga': np.nan,
    'loobapbap': np.nan,
    'sultans mediterranean grill': np.nan,
    'the lancaster smokehouse': np.nan,
    'uke': np.nan,
    'kismet': np.nan,
    'baba grill': np.nan,
    'four seasons shawarma': np.nan,
    'ken sushi': np.nan,
    'meditteraneo family restaurant': np.nan,
    'pho dau bo restaurant': np.nan,
    'banh mi givral deli': np.nan,
    'kims kitchen': np.nan,
    'yes sushi': np.nan,
    'sultans': np.nan,
    'yunshang rice noodle': np.nan,
    'hot pot noodle': np.nan,
    'the yeti': np.nan,
    'pennys hot chicken': np.nan,
    'seven shores': '43.46605176760062, -80.52120010457116',
    'babas chicken': np.nan,
    'shinwa': np.nan,
    'ipotatoe': np.nan,
    'vincenzos': np.nan,
    'bauer kitchen': np.nan,
    'bogda': np.nan,
    'molly blooms': np.nan,
    'yangs': np.nan,
    'the lab street eats': np.nan,
    'tsujiri': np.nan,
    'ken sushi house': np.nan,
    'seoul soul': np.nan,
    'mimo thai kitchen': np.nan,
    'graffiti market': np.nan,
    'chucks roadhouse': np.nan,
}


from source import load_data
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

def kw_restaurants(df: pd.DataFrame, show=True):
    data = df['life', 'fav-restaurant'].dropna()
    data = data.str.split(',').explode()
    data = data.str.replace("'", '').str.lower().str.strip()
    chords = data.replace(RESTAURANT_COORDINATES)
    chords = coerce_numeric(chords.str.split(',', expand=True))
    data = pd.concat([data, chords], axis=1).dropna()
    data.columns = ['name', 'latitude', 'longitude']
    data = data.value_counts().reset_index()
    fig = px.scatter_mapbox(data, lat='latitude', lon='longitude', text='name', size='count', zoom=15)
    fig.update_layout(mapbox_style="open-street-map")
    fig.update_layout(margin={"r":0,"t":0,"l":0,"b":0})
    if show:
        fig.show()
    return fig


if __name__ == "__main__":
    df = load_data()
    kw_restaurants(df)
