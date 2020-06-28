const PathName = {
    ROOT: `/`,
    INTRO: `/intro`,
    ABOUT: `/about`,
    LOCATION: `/location`,
    SALARY: `/salary`,
}

const routes = [
    PathName.ROOT,
    PathName.INTRO,
    PathName.ABOUT,
    PathName.LOCATION,
    PathName.SALARY,
];

const personSexNames = {
    female: `Женщина`,
    male: `Мужчина`
}

const InputViewMode = {
    WITH_LABEL: `WITH_LABEL`,
    PLACEHOLDER: `PLACEHOLDER`,
}

export {PathName, routes, InputViewMode, personSexNames};
