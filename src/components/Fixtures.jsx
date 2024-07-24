import React from 'react'
import { leaderboardData, leagueFixtures } from '../utils'
import user from '../assets/user.svg'
export default function Fixtures() {
    const sortedLeaderboardData = leaderboardData.sort((a, b) => b.points - a.points);
    return (
        <>
            <section className="grid mt-5 xs:w-[95%] lg:w-[80%] mx-auto xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-3 xl:grid-cols-3 gap-8 lg:justify-items-center">
                <div className='bg-[#BBD4BB] border-2 rounded-md border-[#50904F]  w-full'>
                    <h2 className='text-center text-xs pt-2 font-700'>Week 1 Fixtures</h2>
                    <ul>
                        {leagueFixtures.map((fixture, idx) => {
                            return (
                                <li key={idx} className='flex justify-center h-[100px] gap-4 items-center py-4'>
                                    <label className='text-xs text-center font-500  ' htmlFor="">
                                        <img className='w-8 h-8 mt-4' src={fixture.home.logo} alt="" />
                                        {fixture.home.shortname}
                                    </label>
                                    <small>v</small>
                                    <label className='text-xs font-500 text-center ' htmlFor="">
                                        <img className='w-8 h-8 mt-4' src={fixture.away.logo} alt="" />
                                        {fixture.away.shortname}
                                    </label>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='bg-[#BBD4BB] border-2 rounded-md border-[#50904F]  w-full'>
                    <h2 className='text-center text-xs pt-2 font-700'>Leaderboard</h2>
                    <table className="min-w-full text-xs overflow-hidden border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2  border-b border-gray-300">Rank</th>
                                <th className="py-2  border-b border-gray-300">Player</th>
                                <th className="py-2 text-start  border-b border-gray-300">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedLeaderboardData.map((data, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="py-2 px-4 border-b border-gray-300">{index + 1}</td>
                                    <td className="py-2 px-4 border-b border-gray-300">
                                        <div className='flex items-center'>
                                            <img src={user} alt="" />
                                            <span>{data.player}</span>
                                        </div>
                                    </td>
                                    <td className="py-2  border-b border-gray-300">{data.points}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                </div>
                <div className='bg-[#BBD4BB] border-2 rounded-md border-[#50904F]  w-full'>
                    <h2 className='text-center text-xs pt-2 font-700'>Results</h2>
                    <ul>
                        {leagueFixtures.map((fixture, idx) => {
                            return (
                                <li key={idx} className='flex justify-center h-[100px] gap-4 items-center py-4'>
                                    <label className='text-xs text-center font-500  ' htmlFor="">
                                        <img className='w-8 h-8 mt-4' src={fixture.home.logo} alt="" />
                                        {fixture.home.shortname}
                                    </label>
                                    <small>{fixture.home.score}-{fixture.away.score}</small>
                                    <label className='text-xs font-500 text-center ' htmlFor="">
                                        <img className='w-8 h-8 mt-4' src={fixture.away.logo} alt="" />
                                        {fixture.away.shortname}
                                    </label>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
     
        </>
    )
}
