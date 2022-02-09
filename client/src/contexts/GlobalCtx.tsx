import React, { createContext, useState } from 'react';

interface Props {
    children: any
};

interface GlobalState {
    selectedProjectAccessor: ProjectAccessor
    updateSelectedProject: Function
    projectData: projectData[] | []
    setProjectData: Function
    selectedProjectIdx: number
};

const initialState: GlobalState = {
    selectedProjectAccessor: "keto-blog",
    updateSelectedProject: () => {},
    projectData: [],
    setProjectData: () => {},
    selectedProjectIdx: 0
};

export const GlobalCtx = createContext(initialState);

function GlobalProvider(props: Props) {
    const {
        children
    } = props;

    const [projectData, setProjectData] = useState<projectData[] | []>(initialState.projectData);
    const [selectedProjectAccessor, setSelectedProjectAccessor] = useState<ProjectAccessor>(initialState.selectedProjectAccessor);
    const getProjectIdx = (accessor: ProjectAccessor): number => {
        if(!projectData) return 0;
        const matchedProj: number = projectData.findIndex((project: projectData) => project.accessor === accessor);
        return !!(matchedProj + 1) ? matchedProj : 0;
      };
    
    const [selectedProjectIdx, setSelectedProjectIdx] = useState<number>(getProjectIdx(selectedProjectAccessor));

    const updateSelectedProject = (accessor: ProjectAccessor) => {
        setSelectedProjectAccessor(accessor);
        setSelectedProjectIdx(getProjectIdx(accessor));
    };

    return (
        <GlobalCtx.Provider value={
            {
                selectedProjectAccessor, updateSelectedProject,
                projectData, setProjectData,
                selectedProjectIdx
            }
        }>
            { children }
        </GlobalCtx.Provider>
    );
};

export default GlobalProvider;
