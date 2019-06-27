(ns vlop.core-test
  (:require [nubank.workspaces.core :as ws]
            ["/souenzzo/vlop" :as vlop]
            [clojure.test :refer [is]]))

(ws/deftest app
  (is (= 1
         (vlop/first #js [1 2 3])))
  (is (vlop/is_empty #js[]))
  (is (not (vlop/is_empty #js[1])))
  (is (vlop/or true true))
  (is (vlop/is_nil (vlop/first #js[])))
  (is (vlop/count #js[]))
  (is (= [2 3 4]
         (js->clj (vlop/map vlop/inc #js[1 2 3]))))
  (is (= (range 10)
         (js->clj (vlop/range 10))))
  (is (= {"a" 1}
         (js->clj (vlop/dissoc #js{:a 1 :b 2} "b"))))
  (is (= {"a" "b", "c" "d"}
         (js->clj (vlop/hashMap "a" "b" "c" "d"))))
  (is (vlop/and true true)))
