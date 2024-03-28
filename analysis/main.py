from source import load_data, coerce_numeric
from academics import plot_academics


def generate_plots():
    df = load_data()
    df = coerce_numeric(df)
    figs = plot_academics(df['academics'], show=False)



if __name__ == "__main__":
    generate_plots()
