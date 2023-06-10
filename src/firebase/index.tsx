import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, QueryDocumentSnapshot, DocumentData} from 'firebase/firestore';


export type T_Collections = 'classWorks' | 'feedbacks';

type T_GetOptions<R = any> = {
    collectionName: T_Collections;
    docsMutation?: (response: Array<QueryDocumentSnapshot<DocumentData>>) => R;
}
class Database {
    public readonly collections = {
        classWorks: 'classWorks',
        feedbacks: 'feedback',
    };

    private readonly config = {
        apiKey: import.meta.env.VITE_FB_API_KEY,
        authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FB_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FB_MSG_SENDER_ID,
        appId: import.meta.env.VITE_FB_APP_ID,
        measurementId: import.meta.env.VITE_FB_MEASUREMENT_UD
    };

    private firebaseApp: null | ReturnType<typeof initializeApp> = null;
    private fireStore: null | ReturnType<typeof getFirestore> = null;

    private cache: Partial<Record<keyof typeof this.collections, {clear?: any, mutated?: any}>> = {};

    constructor() {
        this.firebaseApp = initializeApp(this.config);
        this.fireStore = getFirestore(this.firebaseApp);
    }

    cacheResult<R>(collection: keyof typeof this.collections, data: R, isMutated: boolean): void {
        this.cache[collection] = {...this.cache[collection], [isMutated ? 'mutated' : 'clear']: data};
    }

    async getData<R = any>(options: T_GetOptions<R>): Promise<R | Array<QueryDocumentSnapshot<DocumentData>> | undefined> {
        try {
            if(this.fireStore) {
                const cache = this.cache[options.collectionName];

                if(cache) {
                    return cache[options.docsMutation ? 'mutated' : 'clear'];
                }

                const querySnapshot = await getDocs(collection(this.fireStore, options.collectionName));
    
                const data: Array<QueryDocumentSnapshot<DocumentData>> = querySnapshot.docs;
                this.cacheResult(options.collectionName, data, false);

                if(options.docsMutation) {
                    const mutatedDocs: R = options.docsMutation(data);

                    this.cacheResult<R>(options.collectionName, mutatedDocs, true);

                    return mutatedDocs
                }
    
                return data;
            } else {
                throw 'fireStore not initialized';
            }
        } catch (error) {
            console.error(`Promise are rejected, for collection: ${options.collectionName}. Error: ${error}`);
        }
    }
}

export const DB = new Database();
