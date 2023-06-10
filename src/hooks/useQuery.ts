import {useCallback, useEffect, useState} from 'react';
import {DB} from '../firebase';
import {DocumentData, QueryDocumentSnapshot} from 'firebase/firestore';

export default function useQuery<R = any>(
    collection: keyof typeof DB.collections,
    mutator?: (res: Array<QueryDocumentSnapshot>) => R
): Awaited<R> | Array<QueryDocumentSnapshot<DocumentData>> | null {
    const [data, setData] = useState<Awaited<R> | Array<QueryDocumentSnapshot<DocumentData>> | null>(null);

    const request = useCallback(async () => {
        try {
            let options: Parameters<typeof DB.getData<R>>[0] = {collectionName: collection};

            if (mutator) options.docsMutation = mutator;

            const response = await DB.getData<R>(options);

            if (response) setData(response);
        } catch (e) {
            console.error(e);
        }
    }, [collection, mutator]);

    useEffect(() => {
        request();
    }, [request]);

    return data;
}
