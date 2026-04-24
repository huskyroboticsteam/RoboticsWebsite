<script setup lang="ts">
useSeoMeta({
    title: "Competition | Husky Robotics"
});
</script>

<template>
    <main class="bg-black">

        <!-- HERO -->
        <section class="relative">
            <img
                src="../assets/images/competition/urc_team_2025.jpg"
                alt="Husky Robotics at competition."
                class="aspect-16/7 w-full object-cover object-center"
            />
            <div
                style="background: linear-gradient(236deg, rgba(115,115,115,0.2) 22.93%, rgba(0,0,0,0.65) 83.23%);"
                class="absolute inset-0"
            />
            <div class="absolute top-120 right-0 left-0">
                <RoboticsContainer>
                    <h1 class="text-secondary text-6xl font-bold">Competition</h1>
                </RoboticsContainer>
                
            </div>

        </section>

        <!-- INTRO -->
        <section class="bg-white">
            <RoboticsContainer class="flex flex-col gap-12 py-20 lg:flex-row lg:items-center">
                <div class="flex-1 space-y-4">
                    <p class="text-black xl:text-lg">
                        The <strong>University Rover Challenge (URC)</strong> is the world's
                        premier robotics competition for college students. Against the backdrop
                        of the Utah desert, the rover completes tasks that simulate planetary
                        exploration on Mars. Competing against 34 other teams over
                        4 days, the rover participates in four challenges outlined below. 
                    </p>
                </div>
                <div class="w-full flex-1">
                    <div class="aspect-video w-full overflow-hidden rounded-sm">
                        <iframe
                            class="h-full w-full"
                            src="https://www.youtube.com/embed/PJVO7Ae7_4M?si=CNEmDFMKfRhhFo_R"
                            title="URC official submission video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        />
                    </div>
                </div>
            </RoboticsContainer>
        </section>

        <!-- MISSION 1: SCIENCE -->
        <section>
            <RoboticsContainer class="space-y-6 py-16 lg:max-w-6/10">
                <h2 class="text-secondary text-5xl font-bold">Mission 1: Science</h2>
                <p class="text-secondary font-bold">
                     <span class="text-green-400">•</span> Investigate a site for the presence of life by collecting samples in the
                    field, performing basic science evaluation on board, and storing at least
                    one sample in a cache.
                </p>
                <p class="text-secondary">
                    Before any testing commences, the rover must gather GNSS coordinates and
                    use on-board cameras to document potential test sites. After investigation
                    of at least two sites, teams collect a sub-surface sample from one of the
                    sites at a depth of 10 cm or deeper. One sample must be placed in a sealed
                    cache to prevent spillage and returned to judges, upon where competitors
                    will discuss the on-board soil testing results.
                </p>
                <img
                    src="../assets/images/competition/DSC08695.jpg"
                    alt="Rover performing science mission."
                    class="aspect-video w-full object-cover"
                />
            </RoboticsContainer>
        </section>

        <!-- MISSION 2: DELIVERY -->
        <section>
            <RoboticsContainer class="space-y-6 py-16 lg:max-w-6/10">
                <h2 class="text-secondary text-5xl font-bold">Mission 2: Delivery</h2>
                <p class="text-secondary font-bold">
                     <span class="text-green-400">•</span> The rover, assisted by a drone, must deliver a variety of objects to
                    astronauts stationed in the field. Traversing rugged terrain, the rover
                    will travel up to 2 kilometers as it completes this mission in two stages.
                </p>
                <p class="text-secondary">
                    <strong>Stage 1:</strong> The rover opens a toolbox, picks up an object
                    inside, and deliver it to a cache. Once this has been completed, it picks up
                    wreckage pieces and delivers them to astronaut 1 stationed in the field.
                    Finally, it must navigate from start to end cones, picking up an object
                    and bringing it back to the start. With only 35 minutes to cover 2
                    kilometers, the rover must be efficient in its navigation and uses a 6
                    wheel frame with four driving wheels to maneuver through uneven terrain.
                </p>
                <p class="text-secondary">
                    <strong>Stage 2:</strong> After taking an hour to recharge, the rover needs to 
                    find a designated object within a 20 meter radius and deliver it to
                    astronaut 2. It must also find a piece of hidden wreckage in the field and deliver to
                    the same astronaut.
                </p>
                <p class="text-secondary">
                    <strong>Drone:</strong> The drone assists the rover by reading signs,
                    searching large areas or acting as radio relay in areas where
                    the rover on the ground may have poor reception. It must follow a rotary
                    wing design and carry dummy weight equal to battery to simulate gravity
                    on Mars. 
                </p>
                <img
                    src="../assets/images/competition/mobility_2025.jpg"
                    alt="Rover performing delivery mission."
                    class="aspect-video w-full object-cover"
                />
            </RoboticsContainer>
        </section>

        <!-- MISSION 3: EQUIPMENT SERVICING -->
        <section>
            <RoboticsContainer class="space-y-6 py-16 lg:max-w-6/10">
                <h2 class="text-secondary text-5xl font-bold">Mission 3: Equipment Servicing</h2>
                <p class="text-secondary font-bold">
                     <span class="text-green-400">•</span> Perform dexterous operations using a robotic arm on a mock lander, such
                    as turning a valve handle, push buttons, flip switches, turn knobs in a
                    30 minute time limit.
                </p>
                <p class="text-secondary">
                    <strong>The cache:</strong> In the first part of the challenge, the rover
                    uses the arm to insert a tube into a cache container, and then must close
                    and lock the lid. Once this has commenced, it must pick the cache up and transport it to the
                    lander. This cache will then be inserted into a tight-fitting space in a
                    drawer, which will be opened and closed.
                </p>
                <p class="text-secondary">
                    <strong>The panel:</strong> Using its arm, the rover must autonomously
                    type a code that the team is given prior to deployment. Then, it inserts
                    a cable into a USB slot on the lander, and reads GNSS coordinates from a
                    card. Finally, it connects a hose from a fuel tank to the lander.
                </p>
                <img
                    src="../assets/images/competition/equipment_servicing.jpg"
                    alt="Rover performing equipment servicing mission."
                    class="aspect-video w-full object-cover"
                />
            </RoboticsContainer>
        </section>

        <!-- MISSION 4: AUTONOMOUS NAVIGATION -->
        <section>
            <RoboticsContainer class="space-y-6 py-16 lg:max-w-6/10">
                <h2 class="text-secondary text-5xl font-bold">Mission 4: Autonomous Navigation</h2>
                <p class="text-secondary font-bold">
                     <span class="text-green-400">•</span> Autonomously travel to a series of locations and find objects.
                </p>
                <p class="text-secondary">
                    To complete this mission, the rover must autonomously traverse to two
                    GNSS-only locations, 2 posts marked with Augmented Reality tags, and
                    three objects placed on the ground. These three objects must be identified
                    through autonomous image detection, two of which being partially hidden
                    behind rocks or other naturally occurring obstacles.
                </p>
                <img
                    src="../assets/images/competition/coding_2025_hrc.jpg"
                    alt="Rover performing autonomous navigation mission."
                    class="aspect-video w-full object-cover"
                />
            </RoboticsContainer>
        </section>

    </main>
</template>