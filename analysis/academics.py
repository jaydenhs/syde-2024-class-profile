from source import load_data, coerce_numeric
import plotly.express as px


def grade_columns():
    return ['avg-1a', 'avg-1b', 'avg-2a', 'avg-2b', 'avg-3a', 'avg-3b', 'avg-4a']


if __name__ == "__main__":
    df = load_data()['academics'][grade_columns()]
    df = coerce_numeric(df)
    fig = px.line(df.mean(), error_y=df.sem(), markers=True)
    fig.update_layout(title='Average Grades by Term', yaxis=dict(title='Average Grade'), xaxis=dict(title='Term'))
    fig.show()
