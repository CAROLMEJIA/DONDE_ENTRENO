import React from "react";
import ActivityCard from "./ActivityCard";
import NavBar from "./NavBar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivities } from "../redux/actions";

export default function ActivityCards(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const activities = useSelector((state) => state.activities);
  console.log('objeto', activities);
  return (
    <div className="Cards-Activity">
      <NavBar />
      {activities !== String ? (
        activities?.map((e) => (
          <ActivityCard key={e.id} image={e.image} name={e.name} description={e.description} />
        ))
      ) : (
        <p>{activities}</p>
      )}

    </div>
  );
}