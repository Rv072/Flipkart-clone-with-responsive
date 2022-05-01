const profile = {
  profile: "ravi",
  name: "Ankit Jain",
  city: "Indore",
  city: "Pune",
  city: "Mumbai",
  phone: "9977092455",
  city: "Hydrabad",
};
// const {name,city,phone,profile:_profile="NA"} = profile;
// delete profile.city
// const { profile: _profile, name, ...bachaHua } = profile;
const {name, ...bachaHua } = profile;