(ns vlop.core-test
  (:require [nubank.workspaces.core :as ws]
            ["/souenzzo/vlop" :as vlop]
            [clojure.test :refer [is]]))


(ws/deftest app
  (is (= 1
         (vlop/first #js [1 2 3]))))


