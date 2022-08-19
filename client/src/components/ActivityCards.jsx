import React from "react";
import ActivityCard from "./ActivityCard";
import NavBar from "./NavBar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivities } from "../redux/actions";
export default function ActivityCards(props) {
    const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);


    return (
        <div className="Cards-Activity">
             <NavBar />
             {console.log(activities)}

      {activities !== String ? (
        activities.map((e) => (
          <ActivityCard key={e.id} image={e.image} name={e.name} description={e.description} />
        ))
      ) : (
        <p>{activities}</p>
      )}
           
        </div>
    );
}