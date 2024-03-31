import os

from plotly import graph_objects as go
from source import load_data
import academics
import coop



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


def generate_plots(save_dir=None, replace=False, show=False):
    df = load_data()
    figs = {
        # 'friends_vs_grades': academics.friends_vs_grades(df, show=show),
        'ease_vs_use': academics.ease_vs_use(df, show=show),
        'attendance': academics.attendance(df, show=show),
        'grades': academics.grades(df, show=show),
        'attendance_vs_grades': academics.attendance_vs_grades(df, show=show),
        'salary': coop.salary(df, show=show),
        # 'salary_vs_grades': coop.grades_vs_salary(df, show=show),
    }

    if save_dir is not None:
        print(f"Saving {len(figs)} plots to {save_dir}")
        for name, fig in figs.items():
            filepath = os.path.join(save_dir, f'{name}.html')
            if os.path.exists(filepath) and not replace:
                print(f"Skipping {name} as it already exists.")
                continue
            fig = style_figure(fig)
            fig.write_html(filepath, config={'displayModeBar': False, 'displaylogo': False})


if __name__ == "__main__":
    # generate_plots('public/', replace=True)
    generate_plots(show=True)
