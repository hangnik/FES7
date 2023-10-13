import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { appFireStore } from "../firebase/config";

export const useCollection = (transaction, myQuery) => {
  // 문서들의 데이터 관리
  const [documents, setDocuments] = useState(null);
  // 에러 상태 관리
  const [err, setErr] = useState(null);

  useEffect(() => {
    let q;
    if (myQuery) {
      q = query(
        collection(appFireStore, transaction),
        where(...myQuery),
        orderBy("createTime", "desc")
      );
    }

    const unsubscribe = onSnapshot(
      myQuery ? q : collection(appFireStore, transaction),
      (snapshot) => {
        let result = [];

        snapshot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(result);
      },
      (error) => {
        setErr(error.message);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return { documents, err };
};
