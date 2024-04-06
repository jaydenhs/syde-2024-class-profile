import pandas as pd


def get_section_header_map():
    return {
        'background': ['timestamp', 'ethnicity', 'gender', 'sexual-orientation', 'parent-income', 'parent-degree', 'is-international'],
        'academics': [
            'avg-1a', 'avg-1b', 'avg-2a', 'avg-2b', 'avg-3a', 'avg-3b', 'avg-4a',
            'ease-syde101', 'ease-syde101l', 'ease-syde111', 'ease-syde113', 'ease-syde121', 'ease-syde161', 'ease-syde181', 'ease-syde112', 'ease-syde114', 'ease-syde162', 'ease-syde192', 'ease-syde192l', 'ease-syde223',
            'use-syde101', 'use-syde101l', 'use-syde111', 'use-syde113', 'use-syde121', 'use-syde161', 'use-syde181', 'use-syde112', 'use-syde114', 'use-syde162', 'use-syde192', 'use-syde192l', 'use-syde223',
            'ease-syde182', 'ease-syde211', 'ease-syde261', 'ease-syde263', 'ease-syde283', 'ease-syde285', 'ease-syde212', 'ease-syde252', 'ease-syde262', 'ease-syde286', 'ease-syde292', 'ease-syde292l',
            'use-syde182', 'use-syde211', 'use-syde261', 'use-syde263', 'use-syde283', 'use-syde285', 'use-syde212', 'use-syde252', 'use-syde262', 'use-syde286', 'use-syde292', 'use-syde292l',
            'ease-syde311', 'ease-syde351', 'ease-syde361', 'ease-syde381', 'ease-syde383', 'ease-syde312', 'ease-syde352', 'ease-syde352l', 'ease-syde362',
            'use-syde311', 'use-syde351', 'use-syde361', 'use-syde381', 'use-syde383', 'use-syde312', 'use-syde352', 'use-syde352l', 'use-syde362',
            'ease-syde411', 'ease-syde461', 'ease-syde462', 
            'use-syde411', 'use-syde461', 'use-syde462',
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
        'life': ['design-teams', 'sports', 'clubs', 'reps', 'volunteering', 'fav-restaurant', 'politics', 'religions', 'belief-god'],
        'future': ['debt', 'savings',  'percent-financed', 'stay-in-touch', 'grad-trip', 'marrying', 'kids', 'peng', 'post-grad-plan'],
        'grad-school': ['schools-applied', 'depts-applied', 'school-accepted', 'dept-accepted'],
        'job': ['loc-ft', 'ret-to-canada', 'work-remote', 'prev-coop', 'title-ft', 'pay-ft', 'ret-to-school'],
        'fun': ['myers-briggs', 'photos', 'top-song', 'loo-reminder-song', 'party-song', 'gym-song', 'cry-song'],
    }


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


def coerce_numeric(df: pd.DataFrame, errors='coerce') -> pd.DataFrame:
    """Coerce all columns in the DataFrame to numeric. If a value cannot be coerced, it will be replaced with NaN by default."""
    data = df.copy()
    for column in data.columns:
        data[column] = pd.to_numeric(data[column], errors=errors)
    return data


if __name__ == "__main__":
    # print(load_data().background.head())

    df = load_data()
    for section in get_sections():
        print(section)
        print(df[section].head())
        print()
