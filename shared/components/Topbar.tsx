import styled from 'styled-components';
import FacetButton from './FacetButton';

export default function Navbar() {
    return (
        <div>
            <div>
                Deploy Features Faster
            </div>
            <div>
                Rollout features without code and improve your team's productivity
            </div>
            <div>
                <FacetButton disabled={false} variant="contained" color="primary" type="submit" text="Download Our Chrome Extension" onClick={() => { }} />
                <FacetButton disabled={false} variant="contained" color="primary" type="submit" text="Demo" onClick={() => { }} />
            </div>
        </div>
    );
}