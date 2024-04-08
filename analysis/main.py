import os
from plotly import graph_objects as go

from source import load_data, load_edgy_data
import s1_background
import s2_academics
import s3_coop
import s4_syde
import s5_lifestyle
import s6_future



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
    df_edgy = load_edgy_data()
    fig_dirs = {
        '1-background': {
            'ethnicity': s1_background.ethnicity(df, show=False),
            'gender': s1_background.gender(df, show=False),
            'parent-education': s1_background.parent_education(df, show=False),
            'sexual-orientation': s1_background.sexual_orientation(df, show=False),
            'parent-income': s1_background.parent_income(df, show=False),
            'religion': s1_background.religion(df, show=False),
            # 'international': background.international(df, show=False),
        },
        '2-academics': {
            'ease-vs-use': s2_academics.ease_vs_use(df, show=False),
            'attendance': s2_academics.attendance(df, show=False),
            'grades': s2_academics.grades(df, show=False),
            'how-challenging': s2_academics.challenging(df, show=False),
            'attendance-vs-grades': s2_academics.attendance_vs_grades(df, show=False),
            'exchange-locations': s2_academics.exchange_locations(df, show=False),
            # 'friends-vs-grades': academics.friends_vs_grades(df, show=False),
        },
        '3-co-op': {
            'salary': s3_coop.salary(df, show=False),
            'brain-drain': s3_coop.braindrain(df, show=False),
            'grades-vs-salary': s3_coop.grades_vs_salary(df, show=False),
            'work-model': s3_coop.work_model(df, show=False),
            # 'salary-vs-grades': coop.grades_vs_salary(df, show=False),
        },
        '4-syde': {
            'restart-program': s4_syde.restart_program(df, show=False),
            'restart-program-historical': s4_syde.restart_program_historical(df, show=False),
            'close-friends': s4_syde.close_friends(df, show=False),
            'transfer-well-integrated': s4_syde.transfer_well_integrated(df, show=False),
            'crush': s4_syde.crush(df_edgy, show=False),
            'sydecest': s4_syde.sydecest(df_edgy, show=False),
        },
        '5-lifestyle': {
            'politics': s5_lifestyle.political_leaning(df, show=False),
            'myers-briggs': s5_lifestyle.myers_briggs(df, show=False),
            'relation-status': s5_lifestyle.relation_status(df_edgy, show=False),
            'relation-forever': s5_lifestyle.relation_forever(df_edgy, show=False),
            'lost-virginity': s5_lifestyle.lost_virginity(df_edgy, show=False),
            'sex-partners': s5_lifestyle.sex_partners(df_edgy, show=False),
            'num-relations': s5_lifestyle.num_relations(df_edgy, show=False)

        },
        '6-future': {
            'kids-by-gender': s6_future.kids_by_gender(df, show=False),
            'marriage-by-gender': s6_future.marriage_by_gender(df, show=False),
            'next-year-plans': s6_future.next_year_plans(df, show=False),
            'salary-vs-location': s6_future.salary_vs_location(df, show=False),
            'full-time-locations': s6_future.full_time_locations(df, show=False),
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
    generate_plots('public/graphs/', replace=True)
    # generate_plots(show=True)
