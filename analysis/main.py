import os

from plotly import graph_objects as go
from source import load_data
from academics import plot_academics
from coop import plot_coop



def style_figure(fig: go.Figure):
    fig.update_layout(
        title=None,
        margin=dict(l=0, r=0, t=0, b=0),
        paper_bgcolor='rgba(0,0,0,0)',
        plot_bgcolor='rgba(0,0,0,0)',
        updatemenus=[
            dict(
                buttons=list([]),
                showactive=False,
            )
        ],
    )
    return fig


def generate_plots(save_dir: str, replace=False):
    df = load_data()
    figs = {}
    figs.update(plot_academics(df['academics'], show=False))
    figs.update(plot_coop(df['coop'], show=False))

    print(f"Saving {len(figs)} plots to {save_dir}")
    for name, fig in figs.items():
        filepath = os.path.join(save_dir, f'{name}.html')
        if os.path.exists(filepath) and not replace:
            print(f"Skipping {name} as it already exists.")
            continue
        fig = style_figure(fig)
        fig.write_html(filepath, config={'displayModeBar': False, 'displaylogo': False})


if __name__ == "__main__":
    generate_plots('public/', replace=True)
