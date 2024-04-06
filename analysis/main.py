import os
from plotly import graph_objects as go

from source import load_data
import academics
import coop
import background
import syde
import life
import future



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


def generate_plots(save_dir=None, replace=False, show=False, section=None):
    df = load_data()
    fig_dirs = {
        '1-background': {
            'ethnicity': background.ethnicity(df, show=False),
            'gender': background.gender(df, show=False),
            'parent-education': background.parent_education(df, show=False),
            'sexual-orientation': background.sexual_orientation(df, show=False),
            'parent-income': background.parent_income(df, show=False),
            # 'international': background.international(df, show=False),
        },
        '2-academics': {
            'ease-vs-use': academics.ease_vs_use(df, show=False),
            'attendance': academics.attendance(df, show=False),
            'grades': academics.grades(df, show=False),
            'how-challenging': academics.challenging(df, show=False),
            'attendance-vs-grades': academics.attendance_vs_grades(df, show=False),
            # 'friends-vs-grades': academics.friends_vs_grades(df, show=False),
        },
        '3-co-op': {
            'salary': coop.salary(df, show=False),
            'brain-drain': coop.braindrain(df, show=False),
            'grades-vs-salary': coop.grades_vs_salary(df, show=False),
            'work-model': coop.work_model(df, show=False),
            # 'salary-vs-grades': coop.grades_vs_salary(df, show=False),
        },
        '4-syde': {
            'restart-program': syde.restart_program(df, show=False),
            'close-friends': syde.close_friends(df, show=False),
            'transfer-well-integrated': syde.transfer_well_integrated(df, show=False),
        },
        '5-lifestyle': {
            'politics': life.political_leaning(df, show=False),
            'politics': life.myers_briggs(df, show=False),
        },
        '6-future': {
            'kids-by-gender': future.kids_by_gender(df, show=False),
            'marriage-by-gender': future.marriage_by_gender(df, show=False),
            'next-year-plans': future.next_year_plans(df, show=False),
            'salary-vs-location': future.salary_vs_location(df, show=False),
            'full-time-locations': future.full_time_locations(df, show=False),
        },
    }

    if show:
        for subdir, figs in fig_dirs.items():
            if section is None or section in subdir:
                for fig in figs.values():
                    fig.show()

    if save_dir is not None:
        for subdir, figs in fig_dirs.items():
            if section is None or section in subdir:
                directory = os.path.join(save_dir, subdir)
                os.makedirs(directory, exist_ok=True)
                print(f"Saving {len(figs)} plots to {directory}")
                for name, fig in figs.items():
                    filepath = os.path.join(directory, f'{name}.html')
                    if os.path.exists(filepath) and not replace:
                        print(f"Skipping {name} as it already exists.")
                        continue
                    fig = style_figure(fig)
                    fig.write_html(filepath, config={'displayModeBar': False, 'displaylogo': False})


if __name__ == "__main__":
    # generate_plots('public/graphs/', replace=True)
    generate_plots(show=True, section='1-background')
