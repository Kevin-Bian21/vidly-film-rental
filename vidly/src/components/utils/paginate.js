import lodash from "lodash";

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize; //pageNumber : 第几页
    return lodash(items)
        .slice(startIndex)
        .take(pageSize)
        .value();
}