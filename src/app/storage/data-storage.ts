import { Storage } from "@capacitor/storage";



/**
 * wraps the Storage.set function from @capacitor/storage";
 * used to store data on the user's device
 * @param key ex 'session'
 * @param value ex 'true'
 */
export async function set(key: string, value: any): Promise<void> {
    await Storage.set({
        key: key,
        value: JSON.stringify(value),
    });
}


/**
 * wraps the Storage.get function from @capacitor/storage";
 * @param key ex: 'storage'
 * @returns result of the promise
 */
export async function get(key: string): Promise<any> {
    const item = await Storage.get({ key: key });
    return JSON.parse(item.value);
}


/**
 * wrap the Storage.remove function from @capacitor/storage";
 * @param key ex: 'session' 
 */
export async function remove(key: string): Promise<void> {
    await Storage.remove({
        key: key,
    });

}
