import pandas as pd


def get_section_header_map():
    return {
        'background': ['timestamp', 'ethnicity', 'gender', 'sexual-orientation', 'parent-income', 'parent-degree', 'is-international'],
        'academics': [
            'avg-1a', 'avg-1b', 'avg-2a', 'avg-2b', 'avg-3a', 'avg-3b', 'avg-4a',
            'ease-SYDE101', 'ease-SYDE101l', 'ease-SYDE111', 'ease-SYDE113', 'ease-SYDE121', 'ease-SYDE161', 'ease-SYDE181', 'ease-SYDE112', 'ease-SYDE114', 'ease-SYDE162', 'ease-SYDE192', 'ease-SYDE192l', 'ease-SYDE223',
            'use-SYDE101', 'use-SYDE101l', 'use-SYDE111', 'use-SYDE113', 'use-SYDE121', 'use-SYDE161', 'use-SYDE181', 'use-SYDE112', 'use-SYDE114', 'use-SYDE162', 'use-SYDE192', 'use-SYDE192l', 'use-SYDE223',
            'ease-SYDE182', 'ease-SYDE211', 'ease-SYDE261', 'ease-SYDE263', 'ease-SYDE283', 'ease-SYDE285', 'ease-SYDE212', 'ease-SYDE252', 'ease-SYDE262', 'ease-SYDE286', 'ease-SYDE292', 'ease-SYDE292l',
            'use-SYDE182', 'use-SYDE211', 'use-SYDE261', 'use-SYDE263', 'use-SYDE283', 'use-SYDE285', 'use-SYDE212', 'use-SYDE252', 'use-SYDE262', 'use-SYDE286', 'use-SYDE292', 'use-SYDE292l',
            'ease-SYDE311', 'ease-SYDE351', 'ease-SYDE361', 'ease-SYDE381', 'ease-SYDE383', 'ease-SYDE312', 'ease-SYDE352', 'ease-SYDE352l', 'ease-SYDE362',
            'use-SYDE311', 'use-SYDE351', 'use-SYDE361', 'use-SYDE381', 'use-SYDE383', 'use-SYDE312', 'use-SYDE352', 'use-SYDE352l', 'use-SYDE362',
            'ease-SYDE411', 'ease-SYDE461', 'ease-SYDE462', 
            'use-SYDE411', 'use-SYDE461', 'use-SYDE462',
            'attendance-1a', 'attendance-1b', 'attendance-2a', 'attendance-2b', 'attendance-3a', 'attendance-3b', 'attendance-4a', 'attendance-4b',
            'best-te', 'worst-te', 'useful-te', 'best-cse', 'worst-cse',
            'overloaded', 'why-overloaded', 'how-challenging', 'study-spots',
            'fydp-space', 'fydp-domains', 'fydp-details', 'fydp-hours-4a', 'fydp-hours-4b', 'fydp-satisfaction',
            'imposter-1a', 'dropping-out', 'imposter-4b', 'exchange'
        ],
        'exchange': ['school', 'core-courses', 'electives', 'countries-visited', 'fav-country', 'work-hours', 'recommended', 'recommended-why'],
        'coop': [
            'pay-1a', 'loc-1a', 'model-1a', 'industry-1a', 'title-1a',
            'pay-1b', 'loc-1b', 'model-1b', 'industry-1b', 'title-1b',
            'pay-2a', 'loc-2a', 'model-2a', 'industry-2a', 'title-2a',
            'pay-2b', 'loc-2b', 'model-2b', 'industry-2b', 'title-2b',
            'pay-3a', 'loc-3a', 'model-3a', 'industry-3a', 'title-3a',
            'pay-3b', 'loc-3b', 'model-3b', 'industry-3b', 'title-3b',
            'coop-details', 'ww-jobs', 'not-ww-jobs',
        ],
        'syde': ['restart-program', 'close-friends', 'in-1a', 'transfers-well-integrated'],
        'life': ['design-teams', 'sports', 'clubs', 'reps', 'volunteering', 'fav-restaurant', 'politics', 'religion', 'belief-god'],
        'future': ['debt', 'savings',  'percent-financed', 'stay-in-touch', 'grad-trip', 'marrying', 'kids', 'peng', 'post-grad-plan'],
        'grad-school': ['schools-applied', 'depts-applied', 'school-accepted', 'dept-accepted'],
        'job': ['loc-ft', 'ret-to-canada', 'work-remote', 'prev-coop', 'title-ft', 'pay-ft', 'ret-to-school'],
        'fun': ['myers-briggs', 'photos', 'top-song', 'loo-reminder-song', 'party-song', 'gym-song', 'cry-song'],
    }


def get_edgy_headers():
    return  [
        'timestamp', 'sydecest', 'crush', 'longest-relation', 'relation-status', 'relation-forever', 
        'courses-failed', 'lost-virginity', 'cry-spot', 'mental-health', 'mental-health-issues', 'counselling',
        'sex-partners', 'num-relations', 'drugs', 'cheated-in-person', 'cheated-online', 'cheated-caught',
    ]


def get_sections():
    return ['background', 'academics', 'exchange', 'coop', 'syde', 'life', 'future', 'grad-school', 'job', 'fun']


def get_headers(section=None):
    if section is None:
        return [header for headers in get_section_header_map().values() for header in headers]
    return get_section_header_map()[section]


def search_headers(query: str, section=None, options=None):
    options = options or get_headers(section)
    if section is None:
        return [header for header in options if query in header]
    return [(section, header) for header in options if query in header]


def get_section_headers():
    header_map = get_section_header_map()
    sections = get_sections()
    if set(header_map.keys()) != set(sections):
        raise ValueError("Section header map does not match the sections list.")
    for section in sections:
        yield section, header_map[section]


def load_data() -> pd.DataFrame:
    try:
        df = pd.read_csv('datasets/Class Survey (Responses) - Form Responses 1.csv')
    except FileNotFoundError:
        raise FileNotFoundError("Please download the survey data from the Google Drive and place it in the datasets folder.")
    df.columns = pd.MultiIndex.from_tuples([(section, header) for section, headers in get_section_headers() for header in headers])
    return df


def load_edgy_data() -> pd.DataFrame:
    try:
        df = pd.read_csv('datasets/Edgy Survey (Responses) - Form Responses 1.csv')
    except FileNotFoundError:
        raise FileNotFoundError("Please download the survey data from the Google Drive and place it in the datasets folder.")
    df.columns = get_edgy_headers()
    return df



if __name__ == "__main__":
    # print(load_data().background.head())

    df = load_data()
    for section in get_sections():
        print(section)
        print(df[section].head())
        print()