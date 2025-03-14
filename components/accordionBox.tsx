import { useState } from 'react';

const AccordionBox = ({ title, children }) => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const toggleAccordion = () => setIsAccordionOpen(!isAccordionOpen);

    return (
        <div style={{
            border: '1px solid #ccc', borderRadius: '10px'
        }}>
            <button onClick={toggleAccordion} style={{ padding: '10px' }}>
                {title}
            </button>
            {
                isAccordionOpen && <div style={{ padding: '10px', backgroundColor: '#f2f7fc' }}>
                    {children}
                </div>
            }
        </div >
    );
};

export default AccordionBox;
