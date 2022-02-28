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
    updateSelectedIdx: Function
};

const initialState: GlobalState = {
    selectedProjectAccessor: "keto-blog",
    updateSelectedProject: () => {},
    projectData: [],
    setProjectData: () => {},
    selectedProjectIdx: 0,
    updateSelectedIdx: () => {}
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
    const getProjectAccessor = (idx: number): ProjectAccessor => {
        if(!projectData) return "keto-blog";
        return projectData[idx].accessor;
      };
    
    const [selectedProjectIdx, setSelectedProjectIdx] = useState<number>(getProjectIdx(selectedProjectAccessor));

    const updateSelectedProject = (accessor: ProjectAccessor) => {
        setSelectedProjectAccessor(accessor);
        setSelectedProjectIdx(getProjectIdx(accessor));
    };
    const updateSelectedIdx = (idx: number) => {
        setSelectedProjectAccessor(getProjectAccessor(idx));
        setSelectedProjectIdx(idx);
    };

    return (
        <GlobalCtx.Provider value={
            {
                selectedProjectAccessor, updateSelectedProject,
                projectData, setProjectData,
                selectedProjectIdx, updateSelectedIdx
            }
        }>
            { children }
        </GlobalCtx.Provider>
    );
};

export default GlobalProvider;
