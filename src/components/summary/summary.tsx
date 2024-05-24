import { Box, Button, Collapse, Typography } from '@mui/material';
import { availableTemplates } from '../../assets/atoms/formAtoms.ts';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { formFamily } from '../../../models/form/form.ts';
import { FORM_TYPE } from '../../../models/formTemplates/types/template.ts';
import { useSetAtom } from 'jotai/index';
import { formsVisitedAtom } from '../../assets/atoms/progressAtoms.ts';
import FormTemplate from '../form/templateStructure/formTemplate.tsx';

export default function Summary() {
    const navigate = useNavigate();
    const [collapse, setCollapse] = useState(false);
    const setFormsVisited = useSetAtom(formsVisitedAtom);

    useEffect(() => {
        setCollapse(true);
    }, []);

    const handleConfirmSummary = () => {
        // setShouldRemove resets the map of atoms
        // it runs once immediately, which is why we can pass it null right after
        formFamily.setShouldRemove(() => true);
        formFamily.setShouldRemove(null);
        setFormsVisited([]);
        navigate('/');
    };

    const handleDenySummary = () => {
        navigate(`/forms/${FORM_TYPE.PREFERENCES}`);
    };

    return (
        <Collapse in={collapse} orientation={'vertical'} timeout={2000}>
            <Box
                sx={{
                    mx: 'auto',
                    backgroundColor: 'white',
                    width: {
                        xs: 0.8,
                        sm: 0.7,
                        md: 0.6,
                    },
                    height: 'fit-content',
                    mb: 10,
                    p: 2,
                    borderRadius: 5,
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <Typography typography={'h5'} sx={{ mx: 'auto', textAlign: 'center' }}>
                    Thank you for taking the time to fill out our application form!
                </Typography>

                <Typography typography={'p'} sx={{ mx: 'auto', mb: 4, mt: 2 }}>
                    Please double check your input before submitting the application
                </Typography>

                {availableTemplates.map((template) => (
                    <Box key={template.type} sx={{ p: 2 }}>
                        <FormTemplate template={template} isSummary={true} />
                    </Box>
                ))}

                <Box sx={{ mx: 'auto', mt: 4, display: 'flex', columnGap: 2 }}>
                    <Button color={'error'} onClick={handleDenySummary} sx={{ minWidth: 0 }} variant={'outlined'}>
                        Oops, I made a mistake!
                    </Button>
                    <Button color={'success'} onClick={handleConfirmSummary} sx={{ minWidth: 0 }} variant={'contained'}>
                        Looks good to me!
                    </Button>
                </Box>
            </Box>
        </Collapse>
    );
}
