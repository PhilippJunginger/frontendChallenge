import { Box, Grow, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import theme from '../assets/theme.ts';
import { FORM_TYPE } from '../../models/formTemplates/types/template.ts';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import { useAtomValue, useSetAtom } from 'jotai/index';
import { currentFormTypeAtom } from '../assets/atoms/formAtoms.ts';
import { progressItemsAtom } from '../assets/atoms/progressAtoms.ts';

export default function Progress() {
    const setCurrentFormType = useSetAtom(currentFormTypeAtom);
    const progressItems = useAtomValue(progressItemsAtom);

    const handleProgressItemClick = (clickedType: FORM_TYPE) => {
        setCurrentFormType(clickedType);
    };

    const getFormTypeIcon = (type: FORM_TYPE): React.JSX.Element => {
        switch (type) {
            case FORM_TYPE.PREFERENCES:
                return <RoomPreferencesIcon />;
            case FORM_TYPE.FINANCIAL_INFORMATION:
                return <WorkIcon />;
            case FORM_TYPE.LIVING_SITUATION:
                return <HomeIcon />;
            case FORM_TYPE.PERSONAL_INFORMATION:
                return <PersonIcon />;
        }
    };

    return (
        <Box sx={{ mx: 'auto', mb: 4, display: 'flex', gap: 1 }}>
            {progressItems.map(({ type, isFilledOut }) => (
                <Grow in={true} timeout={600}>
                    <IconButton
                        key={type}
                        size={'large'}
                        onClick={() => handleProgressItemClick(type)}
                        sx={{
                            height: 1,
                            aspectRatio: '1/1',
                            border: 2,
                            minHeight: 60,
                            display: 'flex',
                            backgroundColor: isFilledOut ? theme.palette.success.light : theme.palette.error.light,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 2.5,
                        }}>
                        {getFormTypeIcon(type)}
                    </IconButton>
                </Grow>
            ))}
        </Box>
    );
}
