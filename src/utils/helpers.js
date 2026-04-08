import { LABELS } from "../data/labels";

export function getLabel(map, value) {
    return map[value] || value;
}

export function getTag(tag) {
    return LABELS.tags[tag] || {
        label: tag,
        icon: "❓"
    }
}