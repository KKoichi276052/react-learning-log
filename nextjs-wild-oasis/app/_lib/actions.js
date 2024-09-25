'use server';

import { auth, signIn, signOut } from './auth';

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error('You must be signed in to update your profile');

  const nationalID = formData.get('nationalID');
  const [nationality, countryFlag] = formData.get('nationality').split('%');

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
    throw new Error('Invalid national ID');
  }

  const updateData = {
    nationalID,
    nationality,
    countryFlag,
  };

  console.log(updateData);
}

export async function signInAction() {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}
