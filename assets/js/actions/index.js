

export const CURRENT_VIEW = 'CURRENT_VIEW';

export function selectView(view) {
    return {
        type: CURRENT_VIEW,
        payload: view
    };
}